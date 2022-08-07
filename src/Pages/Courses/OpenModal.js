import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { toast } from 'react-toastify';
import Loading from '../../Components/Loading';


const OpenModal = ({ purchase, date, setPurchase }) => {
    const { _id, name, slots, grades } = purchase;
    const [user, loading] = useAuthState(auth);
    const formattedDate = format(date, 'PP');

    if (loading || !user) {
        return <Loading></Loading>
    }

    const handleBooding = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const grade = event.target.grade.value;

        const enroll = {
            enrollId: _id,
            courseName: name,
            date: formattedDate,
            slot,
            grade,
            student: user.email,
            studentName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('https://guarded-tundra-47741.herokuapp.com/enroll', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(enroll)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Successfully enrolled, ${formattedDate}, gradre ${grade} at ${slot}`)
                }
                else {
                    toast.error(`Already enrolled on, ${data.enroll?.date}, grade ${data.enroll?.grade} at ${data.enroll?.slot}`)
                }
                setPurchase(null);
            });


    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-2xl text-secondary text-center lg:mb-12">Enroll For : <span className='text-red'>{name}</span></h3>
                    <form onSubmit={handleBooding}
                        className='grid grid-cols-1 gap-3 justify-items-center mt-6'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs text-center" />
                        <select name='slot' className='select select-bordered w-full max-w-xs'>
                            {
                                slots.map(slot => <option key={slot._id} value={slot}>{slot}</option>)
                            }
                        </select>
                        <select name='grade' className='select select-bordered w-full max-w-xs'>
                            {
                                grades.map(grade => <option key={grade._id} value={grade}>{grade}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default OpenModal;
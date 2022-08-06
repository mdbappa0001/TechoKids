import React from 'react';
import { format } from 'date-fns';


const OpenModal = ({ purchase, date, setPurchase }) => {
    const { name, slots, grades } = purchase;

    const handleBooding = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot);
        setPurchase(null);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-2xl text-secondary text-center lg:mb-12">Enroll For : <span className='text-red'>{name}</span></h3>
                    <form onSubmit={handleBooding}
                    className='grid grid-cols-1 gap-3 justify-items-center mt-6'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs text-center" />
                        <select name='slot' className='select select-bordered w-full max-w-xs'>
                            {
                                slots.map(slot =>  <option key={slot._id} value={slot}>{slot}</option>)
                            }
                        </select>
                        <select name='grade' className='select select-bordered w-full max-w-xs'>
                            {
                                grades.map(grade =>  <option key={grade._id} value={grade}>{grade}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default OpenModal;
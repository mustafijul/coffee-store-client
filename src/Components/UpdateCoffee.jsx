import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateCoffee = () => {
    const coffees = useLoaderData()
    const { _id, name, quantity, supplier, taste, category, details, photourl } = coffees;
    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photourl = form.photo.value;

        const updatedCoffee = { _id, name, quantity, supplier, taste, category, details, photourl }
        console.log(updatedCoffee);

        fetch(`http://localhost:4000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Updated',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }

            })

    }

    return (
        <div>
            <div className='bg-[#F4F3F0] p-24'>
                <h2 className='text-3xl font-extrabold text-center mb-8'>Update Coffee: {name}</h2>
                <form onSubmit={handleUpdateCoffee}>
                    {/* row of name and quantity */}
                    <div className='md:flex'>

                        <div className='flex gap-2 mt-2 md:w-1/2'>
                            <p className='font-bold pt-2'>Coffee Name</p>
                            <input type="text" name='name' defaultValue={name} placeholder="name" className="input w-full" />
                        </div>


                        <div className='flex gap-2 mt-2 md:w-1/2 ml-4'>
                            <p className='font-bold pt-2'>Coffee Quantity</p>
                            <input type="text" name='quantity' defaultValue={quantity} placeholder="Coffee Quantity" className="input w-full" />
                        </div>
                    </div>

                    {/* row of supplier and taste */}
                    <div className='md:flex mt-5'>

                        <div className='flex gap-2 mt-2 md:w-1/2'>
                            <p className='font-bold pt-2'>Coffee supplier</p>
                            <input type="text" name='supplier' defaultValue={supplier} placeholder="supplier" className="input w-full" />
                        </div>


                        <div className='flex gap-2 mt-2 md:w-1/2 ml-4'>
                            <p className='font-bold pt-2'>Coffee Taste</p>
                            <input type="text" name='taste' defaultValue={taste} placeholder="Coffee taste" className="input w-full" />
                        </div>
                    </div>

                    {/* row of category and details */}
                    <div className='md:flex mt-3'>

                        <div className='flex gap-2 mt-2 md:w-1/2'>
                            <p className='font-bold pt-2'>Coffee category</p>
                            <input type="text" name='category' defaultValue={category} placeholder="category" className="input w-full" />
                        </div>


                        <div className='flex gap-2 mt-2 md:w-1/2 ml-4'>
                            <p className='font-bold pt-2'>Coffee details</p>
                            <input type="text" name='details' defaultValue={details} placeholder="Coffee details" className="input w-full" />
                        </div>
                    </div>

                    {/* photo url */}
                    <div className='mt-5'>
                        <p className='font-bold pt-2'>Photo</p>
                        <input type="text" name='photo' defaultValue={photourl} placeholder="Coffee photo url" className="input w-full" />
                    </div>

                    <input type="submit" value="Update coffee" className='btn btn-block bg-[#D2B48C] mt-5' />

                </form>
            </div>

        </div>
    );
};

export default UpdateCoffee;
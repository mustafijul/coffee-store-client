import React from 'react';
import Swal from 'sweetalert2'
const Coffeecard = ({ coffee }) => {
    const { _id, name, quantity, supplier, taste, category, details, photourl } = coffee;
    console.log(photourl);
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm mt-8">
                <figure>
                    <img
                        src={photourl}
                        alt="Movie" />
                </figure>
                <div className="flex w-full justify-between mr-5">
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{quantity}</p>
                        <p>{supplier}</p>
                        <p>{taste}</p>
                    </div>

                    <div className="card-actions justify-end">
                        <div className="join join-vertical space-y-4">
                            <button className="btn">View</button>
                            <button className="btn">Edit</button>
                            <button onClick={() => handleDelete(_id)} className="btn bg-orange-500">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffeecard;
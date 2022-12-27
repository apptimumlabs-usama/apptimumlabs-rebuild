import React from 'react'
import InputField from '../../components/InputField/InputField'

const Form = () => {
    return (
        <form>
            <div className="grid md:grid-cols-2 md:gap-8">
                <div>
                    <div className="grid md:grid-cols-2 md:gap-4">
                        <div className="mb-3">
                            <InputField
                                id="firstName"
                                placeholder="First Name*"
                                type="text"
                                name="firstName"
                            // value={formik?.values?.firstName}
                            // onChange={formik?.handleChange}
                            />
                            <p className="mt-1 text-sm" style={{ color: "#FF0000" }}>
                                {/* {formik?.touched?.firstName && formik?.errors?.firstName} */}
                            </p>
                        </div>
                        <div className="mb-3">
                            <InputField
                                id="lastName"
                                placeholder="Last Name*"
                                type="text"
                                name="lastName"
                            // value={formik?.values?.lastName}
                            // onChange={formik?.handleChange}
                            />
                            <p className="mt-1 text-sm" style={{ color: "#FF0000" }}>
                                {/* {formik?.touched?.lastName && formik?.errors?.lastName} */}
                            </p>
                        </div>
                    </div>
                    <div className="mb-3">
                        <InputField
                            placeholder="Email*"
                            type="email"
                            name="email"
                        //   value={formik?.values?.email}
                        //   onChange={formik?.handleChange}
                        />
                        <p className="mt-1 text-sm" style={{ color: "#FF0000" }}>
                            {/* {formik?.touched?.email && formik?.errors?.email} */}
                        </p>
                    </div>
                    <div className="mb-3">
                        <InputField
                            placeholder="Phone*"
                            type="phone"
                            name="phone"
                        //   value={formik?.values?.phone}
                        //   onChange={formik?.handleChange}
                        />
                        <p className="mt-1 text-sm" style={{ color: "#FF0000" }}>
                            {/* {formik?.touched?.phone && formik?.errors?.phone} */}
                        </p>
                    </div>
                    {/* {path === "contact" ? */}
                    <div className="mb-3">
                        <InputField
                            placeholder="Budget"
                            type="number"
                            name="budget"
                        // value={formik?.values?.budget}
                        // onChange={formik?.handleChange}
                        />
                    </div>
                    {/* : ""} */}
                </div>
                <div className="mb-3">
                    <textarea
                        placeholder="Message or Project Description"
                        type="text"
                        name="message"
                        className="py-2 px-4 rounded-md w-full h-full outline-none"
                    // value={formik?.values?.message}
                    // onChange={formik?.handleChange}
                    />
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <button className='bg-primary text-white hover:scale-[1.03] active:scale-[0.97]I px-5 py-2 text-base rounded-md  ${className'>
                    Submit
                </button>
            </div>
        </form>
    )
}

export default Form

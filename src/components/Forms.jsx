import * as Form from "@radix-ui/react-form"
import * as Select from "@radix-ui/react-select"
import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from "@radix-ui/react-icons"
import { forwardRef, useState } from "react"

import Header2 from "./Header2"
import image from "../assets/Contact-Form-Image.png"

const Forms = () => {

    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        message: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        //form validation
        console.log(formData)

        clearForm()
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const clearForm = () => {
        setFormData({
            name: "",
            lastName: "",
            email: "",
            message: "",
        })
    }

    return(
        <div>
            <Header2 title="How can I help you?"/>
            <div className="
                flex mt-8 gap-6 justify-center flex-col
                md:flex-row
            ">
                <Form.Root className="flex-1" onSubmit={handleSubmit}>

                    <div className="flex gap-4">
                        {/* name goes here */}
                        <Form.Field className="w-full" name="name">
                            <div className="flex justify-between">
                                <Form.Label className="font-Roboto font-bold">
                                    First Name <span className="text-red-500">*</span>
                                </Form.Label>
                                <Form.Message className="text-red-500 font-Roboto" match="valueMissing">
                                    Can't be empty
                                </Form.Message>
                            </div>
                            <Form.Control asChild>
                                <input 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    className="border rounded-xl p-4 w-full font-Roboto mt-2" 
                                    placeholder="John" 
                                    type="text" 
                                    required
                                />
                            </Form.Control>
                        </Form.Field>

                        {/* last name goes here */}
                        <Form.Field className="w-full" name="lastName">
                            <div className="flex justify-between">
                                <Form.Label className="font-Roboto font-bold">
                                    Last Name <span className="text-red-500">*</span>
                                </Form.Label>
                                <Form.Message className="text-red-500 font-Roboto" match="valueMissing">
                                    Can't be empty
                                </Form.Message>
                            </div>
                            <Form.Control asChild>
                                <input
                                    value={formData.lastName} 
                                    onChange={handleChange} 
                                    className="border rounded-xl p-4 w-full font-Roboto mt-2" 
                                    placeholder="Doe" 
                                    type="text" 
                                    required
                                />
                            </Form.Control>
                        </Form.Field>
                    </div>

                    {/* email goes here */}
                    <Form.Field className="w-full mt-5" name="email">
                        <div className="flex justify-between">
                            <Form.Label className="font-Roboto font-bold">
                                Email <span className="text-red-500">*</span>
                            </Form.Label>
                            <Form.Message className="text-red-500 font-Roboto" match="valueMissing">
                                Can't be empty
                            </Form.Message>
                            <Form.Message className="text-red-500 font-Roboto" match="typeMismatch">
                                Invalid email
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <input 
                                value={formData.email} 
                                onChange={handleChange} 
                                className="border rounded-xl p-4 w-full font-Roboto mt-2" 
                                placeholder="johndoe@some.domain" 
                                type="email" 
                                required
                            />
                        </Form.Control>
                    </Form.Field>

                    {/* select goes here */}
                    {/* <Form.Field className="mt-5">
                        <div className="flex justify-between">
                            <Form.Label className="font-Roboto font-bold">
                                Reason <span className="text-red-500">*</span>
                            </Form.Label>
                            <Form.Message className="text-red-500 font-Roboto" match="valueMissing">
                                Invalid email
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <Select.Root required>
                                <Select.Trigger className="relative w-full border rounded-xl flex p-4 justify-between items-center mt-2" aria-label="Jobs">
                                    <Select.Value placeholder="Pick an option"/>
                                    <Select.Icon><ChevronDownIcon /></Select.Icon>
                                </Select.Trigger>
                                <Select.Content position="popper" sideOffset={0} className="bg-white w-[200px] rounded-xl p-3 overflow-hidden border">
                                    <Select.ScrollUpButton><ChevronUpIcon /></Select.ScrollUpButton>
                                    <Select.Viewport>
                                        <Select.Group>
                                            <Select.Label>Section 1</Select.Label>
                                            <Select.Item value="1" className="flex items-center justify-between">
                                                <Select.ItemText>Item 1</Select.ItemText>
                                                <Select.ItemIndicator><CheckIcon /></Select.ItemIndicator>
                                            </Select.Item>
                                            <Select.Item value="2" className="flex items-center justify-between">
                                                <Select.ItemText>Item 2</Select.ItemText>
                                                <Select.ItemIndicator><CheckIcon /></Select.ItemIndicator>
                                            </Select.Item>
                                        </Select.Group>

                                        <Select.Separator className="h-px bg-black my-5" />

                                        <Select.Group>
                                            <Select.Label>Section 2</Select.Label>
                                            <Select.Item value="3" className="flex items-center justify-between">
                                                <Select.ItemText>Item 3</Select.ItemText>
                                                <Select.ItemIndicator><CheckIcon /></Select.ItemIndicator>
                                            </Select.Item>
                                            <Select.Item value="4" className="flex items-center justify-between">
                                                <Select.ItemText>Item 4</Select.ItemText>
                                                <Select.ItemIndicator><CheckIcon /></Select.ItemIndicator>
                                            </Select.Item>
                                            <Select.Item value="5" className="flex items-center justify-between">
                                                <Select.ItemText>Item 5</Select.ItemText>
                                                <Select.ItemIndicator><CheckIcon /></Select.ItemIndicator>
                                            </Select.Item>
                                            <Select.Item value="6" className="flex items-center justify-between">
                                                <Select.ItemText>Item 6</Select.ItemText>
                                                <Select.ItemIndicator><CheckIcon /></Select.ItemIndicator>
                                            </Select.Item>
                                            <Select.Item value="7" className="flex items-center justify-between">
                                                <Select.ItemText>Item 7</Select.ItemText>
                                                <Select.ItemIndicator><CheckIcon /></Select.ItemIndicator>
                                            </Select.Item>
                                            <Select.Item value="8" className="flex items-center justify-between">
                                                <Select.ItemText>Item 8</Select.ItemText>
                                                <Select.ItemIndicator><CheckIcon /></Select.ItemIndicator>
                                            </Select.Item>
                                        </Select.Group>
                                    </Select.Viewport>
                                    <Select.ScrollDownButton><ChevronDownIcon /></Select.ScrollDownButton>
                                </Select.Content>
                            </Select.Root>
                        </Form.Control>
                    </Form.Field> */}

                    {/* message goes here */}
                    <Form.Field className="w-full mt-5" name="message">
                        <div className="flex justify-between">
                            <Form.Label className="font-Roboto font-bold">
                                Message <span className="text-red-500">*</span>
                            </Form.Label>
                            <Form.Message className="text-red-500 font-Roboto" match="valueMissing">
                                Can't be empty
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <textarea
                                value={formData.message}
                                onChange={handleChange}
                                className="border rounded-xl p-4 w-full font-Roboto mt-2"
                                cols="30" 
                                rows="5" 
                                placeholder="I need help with a website" 
                                required
                            >
                            </textarea>
                        </Form.Control>
                    </Form.Field>

                    <Form.Submit asChild>
                        <button
                            className="w-full p-3 mt-5 rounded-lg text-white bg-main hover:bg-mainHover active:bg-neutral-300"
                            type="submit"
                        >
                            Send message
                        </button>
                    </Form.Submit>
                </Form.Root>
                <div className="flex-1 relative">
                    <img className="
                        hidden
                        md:block sm:bsolute md:left-12 md:top-[-50px]
                    " 
                    src={image} alt="Contact Image" />
                </div>
            </div>
        </div>
    )
}

export default Forms
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

function CreatePost() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        propmt: "",
        photo: "",
    });
    const [generatingImg, setGeneratingImg] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {};

    const handleChange = (e) => {};

    const handleSuprizeMe = () => {};

    return (
        <section className="max-w-7xl mx-auto">
            <div>
                <h1 className="font-extrabold text-[#222328] text-[32px]">
                    Create
                </h1>
                <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
                    Generate an imaginative image through DALL-E AI and share it
                    with the community
                </p>
            </div>

            <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5">
                    <FormField
                        lableName="Your Name"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={form.name}
                        handleChange={handleChange}
                    />

                    <FormField
                        lableName="prompt"
                        type="text"
                        name="prompt"
                        placeholder="Synthwave aeroplane"
                        value={form.propmt}
                        handleChange={handleChange}
                        isSuprizeMe
                        handleSurpriseMe={handleSuprizeMe}
                    />

                    <div>
                        
                    </div>
                </div>
            </form>
        </section>
    );
}

export default CreatePost;

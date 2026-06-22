import React, { useState } from "react";
import NiceSelect from "../Header/NiceSelect";

function Booking() {
    const [formData, setFormData] = useState({
        destination: "",
        adventureType: "",
        duration: "",
        category: ""
    });

    const [formMessage, setFormMessage] = useState({ text: "", type: "" });

    const destinationOptions = [
        { value: "India (Dambadiwa)", label: "ඉන්දියාව (දඹදිව)" },
        { value: "Thailand", label: "තායිලන්තය" },
        { value: "Bangkok", label: "බැංකොක්" },
        { value: "Sri Lanka", label: "ශ්‍රී ලංකාව" },
        { value: "Nepal", label: "නේපාලය" },
    ];
    const adventureOptions = [
        { value: "Pilgrimage Tour", label: "වන්දනා චාරිකා" },
        { value: "Cultural Tour", label: "සංස්කෘතික චාරිකා" },
        { value: "Group Tour", label: "කණ්ඩායම් චාරිකා" },
        { value: "Private Tour", label: "පෞද්ගලික චාරිකා" },
    ];
    const durationOptions = [
        { value: "3 days", label: "දින 3" },
        { value: "5 days", label: "දින 5" },
        { value: "7 days", label: "දින 7" },
        { value: "13 nights", label: "රාත්‍රී 13" },
        { value: "14+ days", label: "දින 14+" },
    ];
    const categoryOptions = [
        { value: "Standard", label: "සාමාන්‍ය" },
        { value: "Deluxe", label: "සුඛෝපභෝගී" },
        { value: "Budget", label: "අවම මුදලට" },
    ];

    const handleChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!formData.destination || !formData.adventureType || !formData.duration || !formData.category) {
            setFormMessage({ text: "Please fill in all fields before searching.", type: "error" });
           
            return;
        }

        setFormMessage({ text: "Search submitted successfully!", type: "success" });

        setFormData({ destination: "", adventureType: "", duration: "", category: "" });
    };

    return (
        <div className="booking-sec">
            <div className="container">
                <form onSubmit={handleSubmit} className="booking-form">
                    <div className="input-wrap">
                        <div className="row align-items-center justify-content-between">
                            <div className="form-group col-md-6 col-lg-auto">
                                <div className="icon">
                                    <i className="fa-light fa-route" />
                                </div>
                                <div className="search-input">
                                    <label>ගමනාන්තය</label>
                                    <NiceSelect
                                        options={destinationOptions}
                                        defaultValue="ගමනාන්තය තෝරන්න"
                                        onChange={(value) => handleChange("destination", value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group col-md-6 col-lg-auto">
                                <div className="icon">
                                    <i className="fa-regular fa-person-hiking" />
                                </div>
                                <div className="search-input">
                                    <label>වර්ගය</label>
                                    <NiceSelect
                                        options={adventureOptions}
                                        defaultValue="චාරිකා වර්ගය"
                                        onChange={(value) => handleChange("adventureType", value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group col-md-6 col-lg-auto">
                                <div className="icon">
                                    <i className="fa-light fa-clock" />
                                </div>
                                <div className="search-input">
                                    <label>කාලසීමාව</label>
                                    <NiceSelect
                                        options={durationOptions}
                                        defaultValue="කාලසීමාව"
                                        onChange={(value) => handleChange("duration", value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group col-md-6 col-lg-auto">
                                <div className="icon">
                                    <i className="fa-light fa-map-location-dot" />
                                </div>
                                <div className="search-input">
                                    <label>සංචාරක කාණ්ඩය</label>
                                    <NiceSelect
                                        options={categoryOptions}
                                        defaultValue="කාණ්ඩය තෝරන්න"
                                        onChange={(value) => handleChange("category", value)}
                                    />
                                </div>
                            </div>
                            <div className="form-btn col-md-12 col-lg-auto">
                                <button className="th-btn" type="submit">
                                    <img src="/assets/img/icon/search.svg" alt="" />
                                    සොයන්න
                                </button>
                            </div>
                        </div>

                        {/* Form Message Display */}
                        {formMessage.text && (
                            <p className={`form-messages mb-0 mt-3 ${formMessage.type === "error" ? "text-danger" : "text-success"}`}>
                                {formMessage.text}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Booking;

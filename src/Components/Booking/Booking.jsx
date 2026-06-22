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
        { value: "India (Dambadiwa)", label: "India (Dambadiwa)" },
        { value: "Thailand", label: "Thailand" },
        { value: "Bangkok", label: "Bangkok" },
        { value: "Sri Lanka", label: "Sri Lanka" },
        { value: "Nepal", label: "Nepal" },
    ];
    const adventureOptions = [
        { value: "Pilgrimage Tour", label: "Pilgrimage Tour" },
        { value: "Cultural Tour", label: "Cultural Tour" },
        { value: "Group Tour", label: "Group Tour" },
        { value: "Private Tour", label: "Private Tour" },
    ];
    const durationOptions = [
        { value: "3 days", label: "3 days" },
        { value: "5 days", label: "5 days" },
        { value: "7 days", label: "7 days" },
        { value: "13 nights", label: "13 nights" },
        { value: "14+ days", label: "14+ days" },
    ];
    const categoryOptions = [
        { value: "Standard", label: "Standard" },
        { value: "Deluxe", label: "Deluxe" },
        { value: "Budget", label: "Budget" },
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
                                    <label>Destination</label>
                                    <NiceSelect
                                        options={destinationOptions}
                                        defaultValue="Select Destination"
                                        onChange={(value) => handleChange("destination", value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group col-md-6 col-lg-auto">
                                <div className="icon">
                                    <i className="fa-regular fa-person-hiking" />
                                </div>
                                <div className="search-input">
                                    <label>Type</label>
                                    <NiceSelect
                                        options={adventureOptions}
                                        defaultValue="Adventure"
                                        onChange={(value) => handleChange("adventureType", value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group col-md-6 col-lg-auto">
                                <div className="icon">
                                    <i className="fa-light fa-clock" />
                                </div>
                                <div className="search-input">
                                    <label>Duration</label>
                                    <NiceSelect
                                        options={durationOptions}
                                        defaultValue="Duration"
                                        onChange={(value) => handleChange("duration", value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group col-md-6 col-lg-auto">
                                <div className="icon">
                                    <i className="fa-light fa-map-location-dot" />
                                </div>
                                <div className="search-input">
                                    <label>Tour Category</label>
                                    <NiceSelect
                                        options={categoryOptions}
                                        defaultValue="Select Category"
                                        onChange={(value) => handleChange("category", value)}
                                    />
                                </div>
                            </div>
                            <div className="form-btn col-md-12 col-lg-auto">
                                <button className="th-btn" type="submit">
                                    <img src="/assets/img/icon/search.svg" alt="" />
                                    Search
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

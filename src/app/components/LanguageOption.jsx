// src/components/LanguageOption.tsx
import React from "react";
import PropTypes from "prop-types";

const LanguageOption = ({ label, isSelected, onClick }) => {
    const style = {
        cursor: "pointer",
        padding: "5px 10px",
        borderBottom: isSelected ? "2px solid blue" : "none",
        color: isSelected ? "RGB(37, 122, 233)" : "RGB(109, 112, 117)",
        fontWeight: isSelected ? "" : "normal",
    };

    return (
        <div style={style} onClick={onClick}>
            {label}
        </div>
    );
};

LanguageOption.propTypes = {
    label: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default LanguageOption;

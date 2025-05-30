// src/components/OptionButton.tsx
'use client';
import React from 'react';

import PropTypes from "prop-types";

const OptionButton = ({ icon, label, isSelected, onClick }) => {
    const style = {
        border: "2px solid lightgray",
        borderRadius: "5px",
        width: "150px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "10px",
        cursor: "pointer",
        gap: "10px",
        backgroundColor: isSelected ? "RGB(232, 240, 254)" : "white",
        color: isSelected ? "RGB(25, 103, 210)" : "blue",
        transition: "0.5s",

    };

    return (
        <div style={style} onClick={onClick}>
            {icon}
            {label}
        </div>
    );
};

OptionButton.propTypes = {
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default OptionButton;

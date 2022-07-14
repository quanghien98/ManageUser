import React, { useCallback, useEffect, useState } from 'react';

function Input({ value, name, cb, type, label }) {
    const [text, setText] = useState(value)

    const handleChange = useCallback((e) => {
        const { name, value } = e.target
        cb({ name, value })
        setText(value)
    }, [cb])

    useEffect(() => {
        setText(value)
    }, [value])

    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <input onChange={handleChange} type={type} className="form-control" value={text} name={name} />
        </div>
    );
}

export default Input;
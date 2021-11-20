import React, { FC } from "react";
import { Props } from './props';

export const HotelCard: FC<Props> = ({ name, price, description, imageUrl, onClick, ...rest } : Props) => {
    return (
        <div {...rest}>
            <div className="card" style={{ borderRadius: 16, border: 'none' }}>
                <img src={imageUrl} className="card-img-top tw-mb-2" alt="..." style={{ height: 144, borderRadius: 9 }} />
                <div className="card-body d-flex justify-content-between">
                    <div className="card-img-overlay">
                        <p className="card-title tw-font-bold text-white" style={{ fontSize: 20 }}>{name}</p>
                    </div>
                    <div>
                        <p className="card-text text-danger tw-font-semibold">{price}</p>
                        <p className="card-text text-dark tw-font-semibold tw-mt-2">{description}</p>
                        <p className="card-text" style={{ color: 'grey' }}>{name}</p>
                    </div>
                    <button type="button" className="btn btn-outline-dark" style={{ height: 40 }} onClick={onClick}>
                        Book
                    </button>
                </div>
            </div>
        </div>
    );
};

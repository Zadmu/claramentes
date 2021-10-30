import React from 'react';
import courseCSS from '../../css/courseCard.module.css';
import Link from 'next/link';

const GroupCard = ({ groups }) => {
    const renderGroups = groups.map((group, i) => {
        return (
            <div key={i} style={{
                height: "259px",
                width: "340px",
                marginLeft: "auto",
                position: "relative",
            }}>
                <Link href="/group/groupid">
                    <div>
                        <div className={courseCSS.taughtBy}>
                            <h3 className={courseCSS.owner}>Leader:<br />{group.admins}</h3>
                        </div>
                        <img src={group.picture} className={courseCSS.image} />
                        <div style={{
                            height: "240px",
                            background: "#F4EED9",
                            width: "340px",
                            marginTop: "19px",
                            borderRadius: "20px",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        }}>
                            <div style={{
                                background: "rgba(0, 0, 0, 0.1)",
                                borderRadius: "10px",
                                left: "13.82%",
                                top: "74.13%",
                                width: "246px",
                                height: "56px",
                                position: "absolute"
                            }}>
                                <h2 className={courseCSS.name}>{group.name}</h2>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })



    return (
        <div className={courseCSS.row}>
            {renderGroups}
        </div>
    );
}

export default GroupCard;
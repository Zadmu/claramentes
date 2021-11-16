import React from 'react';
import courseCSS from '../../css/courseCard.module.css';
import Link from 'next/link';

const GroupCard = ({ groups }) => {

    const displayThreeGroups = groups.slice(0, 3);

    const renderGroups = displayThreeGroups.map((group, i) => {
        return (
            <div key={i} style={{
                height: "259px",
                width: "340px",
                marginLeft: "auto",
                position: "relative",
            }}>
                <Link href="/group/[id]" as={`/group/${group._id}`} key={`${group._id}/listed`}>
                    <div className = {courseCSS.card}>
                        <div className={courseCSS.taughtBy}>
                            <h3 className={courseCSS.owner}>Leader:<br />{group.leader}</h3>
                        </div>
                        <img src={group.picture} className={courseCSS.image} />
                        <div style={{
                            height: "240px",
                            background: "#F4EED9",
                            width: "340px",
                            marginTop: "19px",
                            borderRadius: "20px",
                        }}>
                            <div style={{
                                background: "rgba(0, 0, 0, 0.1)",
                                borderRadius: "15px",
                                left: "13.82%",
                                bottom: "15px",
                                width: "246px",
                                height: "auto",
                                position: "absolute",
                                padding: "5px"
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
import React from "react";
import styles from "./ListItem.module.css";
import Image from "next/image";
import playOverlay from "../../../../Images/overlay.png";
import { useRouter } from "next/router";

export interface ListItemProps {
    items: Models.YTVideo;
}

export const ListItem: React.FC<ListItemProps> = ({ items }) => {
    const router = useRouter();

    const handleClick = (slug: string) => {
        router.push(`https://www.youtube.com/watch?v=${slug}`);
    };

    return (
        <div className={styles.ListItem_container}>
            <div className={styles.text_container}>
                <div className={styles.videoTitle}>
                    <h2 className={styles.title}>{items.snippet.title}</h2>
                </div>
                <div className={styles.separator}></div>
                <div className={styles.videoChannel}>
                    <h4 className={styles.channel}>
                        {items.snippet.videoOwnerChannelTitle}
                    </h4>
                    <div className={styles.date}>
                    <p >{items.snippet.publishedAt.toString().substring(0, 10)}</p>
                    </div>
                </div>
            </div>
            <div
                onClick={() => handleClick(items.snippet.resourceId.videoId)}
                className={styles.image_container}
            >
                <Image
                    src={items.snippet.thumbnails.medium.url}
                    width={320}
                    height={180}
                    layout={"responsive"}
                    alt={""}
                ></Image>
            </div>
        </div>
    );
};

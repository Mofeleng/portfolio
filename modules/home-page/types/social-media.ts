import { IconType } from "react-icons";

export interface MediaItem {
    logo: IconType;
    link: string;
    className?: string;
}
export interface SocialMedia {
    facebook?: MediaItem;
    instagram?: MediaItem;
    linkedIn?: MediaItem;
    twitter?: MediaItem;
    email?: MediaItem;
}
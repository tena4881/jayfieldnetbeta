import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'

    },
    {
        title: 'Dashboard',
        path: '/profile',
        icon: <IoIcons.IoIosFingerPrint />,
        cName: 'nav-text'

    },
    {
        title: 'Blog',
        path: '/blog',
        icon: <IoIcons.IoMdPaper />,
        cName: 'nav-text'

    },
]

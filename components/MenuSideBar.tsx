import React, { FC, useEffect, useState } from 'react';
import { MenuProps } from '../models/global.model'
import { useRouter } from 'next/router'
import { Box, Collapse } from '@mui/material'
import styles from '../public/static/scss/menu-sidebar.module.scss'
import _ from 'lodash';
import { GiAbstract084 } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import { MdOutlinePermMedia } from "react-icons/md";
import { BsTable, BsBell, BsLayoutWtf } from "react-icons/bs";
import { IoSettingsOutline, IoKeyOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiFlag } from "react-icons/fi";
import { FaIcons } from "react-icons/fa";


const SideBar = ({ _menuList }: MenuProps) => {
  const router = useRouter()
  const [haveNotify, setHaveNotify] = useState(true)
  const [menuList, setMenuList] = useState<any[]>([]);

  useEffect(() => {
    setMenuList(_menuList)
  }, [])

  return (
    <>
      <Box className={styles['contain-sidebar']}>
        <Box className={styles['sidebar-header']}>
          <Box style={{
            display: 'flex',
            fontSize: 24
          }}>
            <GiAbstract084 />
          </Box>
          <Box style={{
            display: 'flex',
            fontSize: 18
          }}>
            Your <b style={{ marginLeft: 5 }}>Name </b>
          </Box>
        </Box>
        <Box className={`${styles['sidebar-body']}`}>
          {_.map(menuList, (menu, index) => {
            return (
              <Box key={index}>
                <Box className={`${router.pathname == menu.url && !menu.isSub ? styles['active-menu'] : null} ${styles['list-menu']}`}
                  onClick={() => {
                    if (menu.isSub) {
                      const updateState = [...menuList]
                      updateState[index]["isCollapse"] = !menu.isCollapse;
                      setMenuList(updateState)
                    } else {
                      menu.newTab ?
                        window.open(menu.url)
                        :
                        router.push(menu.url)
                    }
                  }}>
                  <Box className={styles['icon-menu']}>{menu.icon}</Box>
                  <Box>{menu.menuName}</Box>
                  {menu.showNotification && haveNotify ?
                    <Box className={styles['notify-badge']}>1</Box>
                    : null
                  }
                  {menu.isSub ?
                    <Box className={styles['icon-collapse']}>
                      {menu.isCollapse ?
                        <IoIosArrowUp />
                        :
                        <IoIosArrowDown />
                      }
                    </Box>

                    : <></>
                  }
                </Box>
                {
                  menu.isSub ?
                    <Collapse orientation="vertical" in={menu.isCollapse} sx={{ width: '100%' }}>
                      <Box className={styles['sub-menu']}>
                        {
                          _.map(menu.subMenu, (sub, index) => {
                            return (
                              <Box className={`${styles['sub-list-menu']}`} key={index}
                                onClick={() => {
                                  menu.newTab ?
                                    window.open(menu.url)
                                    :
                                    router.push(menu.url)
                                }}>
                                <Box className={styles['icon-menu']}>{sub.icon}</Box>
                                <Box>{sub.menuName}</Box>
                              </Box>
                            )
                          })
                        }
                      </Box>
                    </Collapse>
                    : <></>
                }
              </Box>
            )
          })}
        </Box>
      </Box>
    </>
  )
}

const MenuSideBar = () => {

  return (
    <>
      <SideBar _menuList={menuListProps} />
    </>
  )
}

const menuListProps = [
  {
    menuName: 'Dashboard',
    url: '/',
    icon: <GoHome />,
    newTab: false,
    isCollapse: false,
    isSub: false,
    showNotification: false
  },
  {
    menuName: 'Media',
    url: '/media',
    icon: <MdOutlinePermMedia />,
    newTab: false,
    isCollapse: false,
    isSub: false,
    showNotification: false
  },
  {
    menuName: 'Table',
    url: '/table',
    icon: <BsTable />,
    newTab: false,
    isCollapse: false,
    isSub: false,
    showNotification: false
  },
  {
    menuName: 'Settings',
    url: '/settings',
    icon: <IoSettingsOutline />,
    newTab: false,
    isCollapse: true,
    isSub: true,
    showNotification: false,
    subMenu: [
      {
        menuName: 'Appearance',
        url: '/appearance',
        icon: <BsLayoutWtf />,
        newTab: false
      },
      {
        menuName: 'Change Password',
        url: '/changepassword',
        icon: <IoKeyOutline />,
        newTab: false
      }
    ]
  },
  {
    menuName: 'Icons',
    url: 'https://react-icons.github.io/react-icons/',
    icon: <FaIcons />,
    newTab: true,
    isCollapse: false,
    isSub: false,
    showNotification: false
  },
  {
    menuName: 'Notification',
    url: '/notification',
    icon: <BsBell />,
    newTab: false,
    isCollapse: false,
    isSub: false,
    showNotification: true
  },
  {
    menuName: 'Report',
    url: '/report',
    icon: <FiFlag />,
    newTab: false,
    isCollapse: false,
    isSub: false,
    showNotification: false
  }
]

export default MenuSideBar
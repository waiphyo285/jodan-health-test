import { useContext } from 'react';
import { useRouter } from 'next/router';
import { filterSubMenu } from '@/utilities/Helpers';
import {
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItem,
  ListSubheader
} from '@mui/material';
import NextLink from 'next/link';
import { SidebarContext } from '@/contexts/SidebarContext';
import { SidebarMenuList as AppMenuList } from '@/configs/SidebarMenu';

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      line-height: 1.4;
      font-weight: bold;
      text-transform: uppercase;
      padding: ${theme.spacing(1, 2.5)};
      color: ${theme.colors.alpha.black[50]};
      font-size: ${theme.typography.pxToRem(12)};
    }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 0px 0;
        margin: -6px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            font-weight: bold;
            text-transform: uppercase;
            font-size: ${theme.typography.pxToRem(10)};
            background: ${theme.colors.primary.main};
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          background-color: transparent;
          color: ${theme.colors.alpha.black[70]};
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.black[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            opacity: .8;
            margin-left: auto;
            color: ${theme.colors.alpha.black[50]};
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            color: ${theme.colors.alpha.black[100]};
            background-color: ${alpha(theme.colors.alpha.black[100], 0.06)};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.black[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.black[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
                  'transform',
                  'opacity'
                ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);

function SidebarMenu() {
  const router = useRouter();
  const currentRoute = router.pathname;

  const { closeSidebar } = useContext(SidebarContext);
  const filteredSubMenu = filterSubMenu(AppMenuList);

  return (
    <MenuWrapper>
      {filteredSubMenu.map((menu: any, idx: number) => (
        <List
          key={idx}
          component="div"
          subheader={
            menu.title ? (
              <ListSubheader component="div" disableSticky>
                {menu.title}
              </ListSubheader>
            ) : undefined
          }
        >
          <SubMenuWrapper>
            {menu.subMenu.map((subMenu: any, idx: number) => (
              <List key={idx} component="div">
                <ListItem component="div">
                  <NextLink href={subMenu.link} passHref>
                    <Button
                      className={currentRoute === subMenu.link ? 'active' : ''}
                      disableRipple
                      component="a"
                      onClick={closeSidebar}
                      startIcon={subMenu.icon}
                    >
                      {subMenu.title}
                    </Button>
                  </NextLink>
                </ListItem>
              </List>
            ))}
          </SubMenuWrapper>
        </List>
      ))}
    </MenuWrapper>
  );
}

export default SidebarMenu;

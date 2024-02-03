import React, { Children, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Dialog, Input, Button, Card, Badge } from "@material-tailwind/react";
import { Heart, MapPin, Search, Suitcase, User, Xmark } from "iconoir-react";
import Logo from "../public/logo.jpg";
import {
  Collapse,
  Typography,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
const navListMenuItems = [
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
  {
    title: "News",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: NewspaperIcon,
  },
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: RectangleGroupIcon,
  },
  {
    title: "Special Offers",
    description: "Explore limited-time deals and bundles",
    icon: TagIcon,
  },
];
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );
  return (
    <div className="min-w-0">
      <React.Fragment>
        <Menu
          open={isMenuOpen}
          handler={setIsMenuOpen}
          offset={{ mainAxis: 20 }}
          placement="bottom-start"
        >
          <MenuHandler>
            <Typography as="div" variant="small" className="font-medium">
              <ListItem
                className="flex items-center gap-2 bg-blue-gray-50 py-2 pr-4 font-medium text-gray-900"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                Resources
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`hidden h-3 w-3 transition-transform lg:block ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform lg:hidden ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </ListItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
            <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
              {renderItems}
            </ul>
          </MenuList>
        </Menu>
        <div className="block lg:hidden">
          <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
        </div>
      </React.Fragment>
    </div>
  );
}

function NavbarSimple() {
  const [searchText, setSearchText] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [selectedLanguage, setSelectedLanguage] = React.useState("O'zbekcha");
  const [selectedImage, setSelectedImage] = React.useState(
    "uzbekistan-flag-round-circle-icon.png",
  );

  const handleLanguageChange = (language, image) => {
    setSelectedLanguage(language);
    setSelectedImage(image);
  };

  const searchTextValue = (e) => {
    setSearchText(e.target.value);
  };

  const handleInputClear = () => {
    setSearchText("");
  };

  return (
    <header className="">
      <div className="flex items-center justify-between py-2">
        <p className="flex gap-1">
          <MapPin /> <NavLink to="/branches">Filiallarimiz</NavLink>
        </p>

        <p className="select-none text-blue-gray-300">
          1 kunda yetkazib beramiz!
        </p>

        <div className="flex items-center text-center">
          <NavLink
            to="/order"
            className="texc mr-3 opacity-55 hover:opacity-100"
          >
            Buyurtmalarim
          </NavLink>
          <div className="mb-[3px]">
            <Menu placement="top">
              <MenuHandler>
                <div className="flex">
                  <ListItem className="flex items-center gap-2 py-2 pr-4">
                    <img
                      width="25"
                      height="24"
                      className="mr-2"
                      src={`https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/${selectedImage}`}
                      alt=""
                    />
                    <p>{selectedLanguage}</p>
                  </ListItem>
                </div>
              </MenuHandler>
              <MenuList>
                <MenuItem
                  onClick={() =>
                    handleLanguageChange(
                      "O'zbekcha",
                      "uzbekistan-flag-round-circle-icon.png",
                    )
                  }
                >
                  <div className="flex gap-x-2">
                    <span class="icon__selected-before">
                      <svg
                        data-v-634bcbae=""
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="ui-icon "
                      >
                        <mask
                          id="mask0_9302_12006"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                        >
                          <path
                            d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                            fill="#F4F5F5"
                          ></path>
                        </mask>
                        <g mask="url(#mask0_9302_12006)">
                          <rect width="20" height="20" fill="#0099B5"></rect>
                          <rect
                            y="13"
                            width="20"
                            height="7"
                            fill="#1EB53A"
                          ></rect>
                          <rect
                            y="13"
                            width="20"
                            height="1"
                            fill="#CE1126"
                          ></rect>
                          <rect
                            y="6"
                            width="20"
                            height="1"
                            fill="#CE1126"
                          ></rect>
                          <rect
                            y="6.5"
                            width="20"
                            height="7"
                            fill="white"
                          ></rect>
                        </g>
                      </svg>
                    </span>
                    O'zbekcha
                  </div>
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    handleLanguageChange(
                      "Русский",
                      "russia-flag-round-circle-icon.png",
                    )
                  }
                >
                  <div className="flex gap-x-2">
                    <span data-v-d508babc="" class="icon__selected-before">
                      <svg
                        data-v-634bcbae=""
                        width="20"
                        height="20"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="ui-icon "
                      >
                        <mask
                          id="mask0_9302_3025"
                          x="0"
                          y="0"
                          width="20"
                          height="21"
                        >
                          <path
                            d="M10 20.5C15.5228 20.5 20 16.0228 20 10.5C20 4.97715 15.5228 0.5 10 0.5C4.47715 0.5 0 4.97715 0 10.5C0 16.0228 4.47715 20.5 10 20.5Z"
                            fill="#F4F5F5"
                          ></path>
                        </mask>
                        <g mask="url(#mask0_9302_3025)">
                          <rect
                            y="0.5"
                            width="20"
                            height="20"
                            fill="white"
                          ></rect>
                          <rect
                            y="13.5"
                            width="20"
                            height="7"
                            fill="#E63838"
                          ></rect>
                          <rect
                            y="7"
                            width="20"
                            height="7"
                            fill="#3131C4"
                          ></rect>
                        </g>
                      </svg>
                    </span>
                    Русский
                  </div>
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    handleLanguageChange(
                      "Крилл",
                      "russia-flag-round-circle-icon.png",
                    )
                  }
                >
                  <div className="flex gap-x-2">
                    <span data-v-d508babc="" class="icon__selected-before">
                      <svg
                        data-v-634bcbae=""
                        width="20"
                        height="20"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="ui-icon "
                      >
                        <mask
                          id="mask0_9302_3025"
                          x="0"
                          y="0"
                          width="20"
                          height="21"
                        >
                          <path
                            d="M10 20.5C15.5228 20.5 20 16.0228 20 10.5C20 4.97715 15.5228 0.5 10 0.5C4.47715 0.5 0 4.97715 0 10.5C0 16.0228 4.47715 20.5 10 20.5Z"
                            fill="#F4F5F5"
                          ></path>
                        </mask>
                        <g mask="url(#mask0_9302_3025)">
                          <rect
                            y="0.5"
                            width="20"
                            height="20"
                            fill="white"
                          ></rect>
                          <rect
                            y="13.5"
                            width="20"
                            height="7"
                            fill="#E63838"
                          ></rect>
                          <rect
                            y="7"
                            width="20"
                            height="7"
                            fill="#3131C4"
                          ></rect>
                        </g>
                      </svg>
                    </span>
                    Крилл
                  </div>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-x-6">
        <NavLink className="text-[25px] font-bold" to="/">
          <img width="60" height="60" src={Logo} alt="Mirposuda logo" />
        </NavLink>
        <List className="mb-6 mt-4 min-w-[190px] select-none p-0 lg:mb-0 lg:mt-0 lg:flex-row  lg:p-1">
          <NavListMenu />
        </List>
        <div
          onClick={(e) => e.currentTarget.childNodes[0].focus()}
          className="flex items-center"
        >
          <input
            className="h-[40px] w-[410px] rounded-[6px] border border-solid border-brown-100 px-2 outline-none"
            type="text"
            placeholder="Mahsulot va turkumlarni izlash"
            value={searchText}
            onChange={searchTextValue}
          />

          <div className="absolute ml-[405px] h-[40px] w-16 rounded-r-[6px] border border-b-[#808080] border-r-[#808080] border-t-[#808080] border-opacity-35 bg-blue-gray-50">
            {!searchText.length > 0 && (
              <Search width="20" height="20" className="m-auto h-full" />
            )}
            {searchText.length > 0 && (
              <button
                onClick={handleInputClear}
                className="flex h-full w-full items-center justify-center"
              >
                <Xmark
                  width="22"
                  height="22"
                  className="rounded-full border border-solid transition hover:bg-blue-gray-100 active:bg-blue-gray-200"
                />
              </button>
            )}
          </div>
        </div>
        <div className="ml-auto flex gap-x-2">
          <ListItem className="flex items-center py-2 pr-4">
            <User className="mx-1" />
            <p onClick={handleOpen}>Kirish</p>
            <Dialog
              size="xs"
              open={open}
              handler={handleOpen}
              className="bg-transparent shadow-none"
            >
              <Card className="mx-auto w-full max-w-[420px] rounded-md">
                <div className="mt-8 grid justify-center">
                  <button
                    onClick={handleOpen}
                    className="mb-4 ml-auto w-min max-w-full rounded-full border bg-blue-gray-50 p-1 hover:bg-blue-gray-100"
                  >
                    <Xmark />
                  </button>
                  <h1 className="text-[22px] font-bold text-black ">
                    Telefon raqamingizni kiriting
                  </h1>
                  <p className="mt-2 text-[16px]">
                    Tasdiqlash kodi bilan SMS yuboramiz
                  </p>
                  <div className="mt-8 max-w-[340px]">
                    <Input
                      size="lg"
                      type="tel"
                      label="+998 00 000 00"
                      variant="outlined"
                    />
                    <Button className="mt-6 w-full">Kodni olish</Button>
                    <p className="mb-5 mt-28 text-center text-[13px]">
                      Tizimga kirish orqali siz shaxsiy ma'lumotlarni qayta
                      ishlash siyosatiga rozilik bildirasiz
                    </p>
                  </div>
                </div>
              </Card>
            </Dialog>
          </ListItem>

          <NavLink to="/likes">
            <Badge content={"0"}>
              <ListItem className="flex items-center  py-2 pr-4">
                <Heart className="mx-1" />
                <h1>Sevimlilar</h1>
              </ListItem>
            </Badge>
          </NavLink>

          <NavLink to="/cart">
            <Badge content={"0"}>
              <ListItem className="flex items-center py-2 pr-4">
                <Suitcase className="mx-1" />
                <h1>Korzinka</h1>
              </ListItem>
            </Badge>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default NavbarSimple;

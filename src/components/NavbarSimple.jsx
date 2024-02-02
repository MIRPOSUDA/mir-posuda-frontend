import React from "react";
import { NavLink } from "react-router-dom";
import {
  Select,
  Option,
  ListItem,
  Dialog,
  Input,
  Button,
  Card,
} from "@material-tailwind/react";
import { Heart, MapPin, Search, Suitcase, User, Xmark } from "iconoir-react";
import Logo from "../public/logo.jpg";
function NavbarSimple() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <header className="">
      <div className="flex items-center justify-between py-2">
        <p className="flex gap-1">
          <MapPin /> Filiallarimiz: Kokand
        </p>

        <p className="text-blue-gray-300">1 kunda yetkazib beramiz!</p>
        <div className="flex gap-x-4">
          <NavLink to="/order" className="opacity-55 hover:opacity-100">
            Buyurtmalarim
          </NavLink>
          <div className="flex">
            <img
              width="24"
              height="24"
              className="mr-2"
              src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/uzbekistan-flag-round-circle-icon.png"
              alt=""
            />
            <p>O'zbekcha</p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-x-6">
        <NavLink className="text-[25px] font-bold" to="/">
          <img width="60" height="60" src={Logo} alt="Mirposuda logo" />
        </NavLink>
        <div className="w-[200px]">
          <Select label="Katalog">
            <Option>Idishlar</Option>
            <Option>Piyolalar</Option>
            <Option>Chinnilar</Option>
            <Option>Bakallar</Option>
          </Select>
        </div>
        <div className="flex items-center">
          <input
            className="h-[40px] w-[410px] rounded-[6px] border border-solid border-brown-100 px-2 outline-none"
            type="text"
            placeholder="Mahsulot va turkumlarni izlash"
          />
          <div className="absolute ml-[405px] h-[40px] w-16 rounded-r-[6px] border border-b-[#808080] border-r-[#808080] border-t-[#808080] border-opacity-35 bg-blue-gray-50">
            <Search width="20" height="20" className="m-auto h-full " />
          </div>
        </div>
        <div className="ml-auto flex gap-x-2">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            <User className="mx-1" />
            <p onClick={handleOpen} className="flex">
              Kirish
            </p>
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
            <ListItem className="flex items-center gap-2 py-2 pr-4">
              <Heart className="mx-1" />
              Sevimlilar
            </ListItem>
          </NavLink>

          <NavLink to="/cart">
            <ListItem className="flex items-center gap-2 py-2 pr-4">
              <Suitcase className="mx-1" />
              Korzinka
            </ListItem>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default NavbarSimple;

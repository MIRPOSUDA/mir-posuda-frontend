import React from "react"
import {NavLink} from "react-router-dom"
import {
  Select,
  Option,
  ListItem,
  Dialog,
  Input,
  Button,
  Card,
} from "@material-tailwind/react"
import {Heart, MapPin, Search, Suitcase, User, Xmark} from "iconoir-react"
import Logo from "../public/logo.jpg"
function NavbarSimple() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen((cur) => !cur)

  return (
    <header className="">
      <div className="flex justify-between items-center py-2">
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
      <div className="flex gap-x-6 mt-6 items-center">
        <NavLink className="font-bold text-[25px]" to="/">
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
            className="border h-[40px] px-2 border-brown-100 rounded-[6px] border-solid w-[410px] outline-none"
            type="text"
            placeholder="Mahsulot va turkumlarni izlash"
          />
          <div className="absolute ml-[405px] rounded-r-[6px] bg-blue-gray-50 w-16 h-[40px] border border-t-[#808080] border-r-[#808080] border-b-[#808080] border-opacity-35">
            <Search width="20" height="20" className="m-auto h-full " />
          </div>
        </div>
        <div className="flex ml-auto gap-x-2">
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
                <div className="grid justify-center mt-8">
                  <button
                    onClick={handleOpen}
                    className="w-min max-w-full ml-auto border bg-blue-gray-50 rounded-full p-1 hover:bg-blue-gray-100 mb-4"
                  >
                    <Xmark />
                  </button>
                  <h1 className="font-bold text-[22px] text-black ">
                    Telefon raqamingizni kiriting
                  </h1>
                  <p className="text-[16px] mt-2">
                    Tasdiqlash kodi bilan SMS yuboramiz
                  </p>
                  <div className="max-w-[340px] mt-8">
                    <Input
                      size="lg"
                      type="tel"
                      label="+998 00 000 00"
                      variant="outlined"
                    />
                    <Button className="w-full mt-6">Kodni olish</Button>
                    <p className="text-center text-[13px] mt-28 mb-5">
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
  )
}

export default NavbarSimple

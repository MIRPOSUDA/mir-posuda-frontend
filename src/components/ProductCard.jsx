import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { CartPlus, StarSolid } from "iconoir-react";
import Yon from "../public/yon.jpg";

function ProductCard() {
  return (
    <Card className="group w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img
          className="transition-transform duration-500 group-hover:scale-105"
          src={Yon}
          alt="ui/ux review check"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        <IconButton
          size="sm"
          color="red"
          variant="text"
          className="!absolute right-4 top-4 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </IconButton>
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-start justify-between">
          <Typography
            variant="h5"
            color="blue-gray"
            className="!line-clamp-2 font-medium"
          >
            Ёнгок чакиш мосламаси.
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            <StarSolid className="text-yellow-700" width={14} height={14} />
            4.3
          </Typography>
        </div>
        <Typography color="gray" className="!line-clamp-3">
          Ёнгокни магзини бутун, юмалоглигича чакади. Дастаси силикон подушкали
        </Typography>
      </CardBody>
      <CardFooter className="flex pt-3">
        <Tooltip content="Savatga qo'shish uchun bosing">
          <span className="ml-auto cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 active:opacity-80">
            <CartPlus className="text-inherit" />
          </span>
        </Tooltip>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;

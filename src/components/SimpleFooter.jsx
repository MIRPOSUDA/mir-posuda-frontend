import {Typography} from "@material-tailwind/react"

function SimpleFooter() {
  return (
    <footer className="fixed flex bottom-0 flex-row flex-wrap items-center gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between max-w-[1230px] w-full">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 Material Tailwind
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 mr-[40px]">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  )
}

export default SimpleFooter

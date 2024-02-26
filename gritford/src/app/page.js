/** @format */

import Image from "next/image"
import Link from "next/link"
import { MdLocalPhone } from "react-icons/md"
import { CiGlobe } from "react-icons/ci"

export default function Home() {
	return (
		<section className="min-h-screen bg-[#F5FDFA]">
			{/* header */}

			<div className="flex justify-between px-10 lg:px-24 py-5 bg-white">
				<div>
					<ul className="flex gap-10 items-center ">
						<li>
							<Image
								width={100}
								height={100}
								src="/Gritford.png"
								className="object-contain"
							/>
						</li>
						<li className="hidden md:block">Home</li>
						<li className="hidden md:block">About Us</li>
						<li className="hidden md:block">Get In Touch</li>
					</ul>
				</div>
				<div>
					<ul className="flex text-sm md:text-md gap-4 md:gap-10 items-center ">
						<li className="text-[#00BF63]">Login</li>
						<li className="rounded-md md:rounded-full px-4 py-2 bg-[#00BF63] text-white">
							Sign Up
						</li>
					</ul>
				</div>
			</div>

			{/* Notification */}

			<div className="bg-[#073821] w-full py-4">
				<div className="flex justify-between px-10 lg:px-24 items-center">
					<div className="flex items-center gap-4">
						<h1 className="font-bold text-md md:text-2xl text-white">
							Earn Decently. Register Today on DSTEP for
							<span className="text-[#45A577]"> FREE!</span>
						</h1>
						<Link
							href="https://www.cognitoforms.com/DigitalChannels1/DSTEPRegistrationFormByNormtakHaifxGritford"
							className="rounded-md md:rounded-full text-sm md:text-md px-4 py-2 bg-[#00BF63] text-white"
						>
							Apply here
						</Link>
					</div>
					<div className="hidden lg:block">
						<Image
							src="/dstep.png"
							width={120}
							height={120}
							className="object-contain"
						/>
					</div>
				</div>
			</div>

			{/* Hero */}

			<div className="w-full px-10 lg:px-24 py-5 text-center flex flex-col gap-4">
				<h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#063720] py-4">
					Your <span className="text-[#45A577]">Digital Career</span>{" "}
					Awaits at Gritford
				</h1>

				<p className="text-sm md:text-md">
					At Gritford, we go beyond the ordinary, offering a diverse
					array of opportunities to shape your future. Our core
					offerings extend far beyond
				</p>
				<p className="text-sm md:text-md">
					education to encompass the realms of digital skills,
					leadership and soft skills development, career advancement
					and remote work support.
				</p>
				<div className="py-10">
					<Link
						href="/"
						className="rounded-full px-4 py-2 bg-[#45A577] text-white w-[200px] "
					>
						Get Started Today
					</Link>
				</div>
			</div>

			{/* Hero Image */}

			<div className="px-10 md:px-24">
				<Image
					src="/heroimg.png"
					width={800}
					height={100}
					className="object-cover w-full py-10"
				/>
			</div>

			{/* Partners */}

			<div className="py-4 px-10 lg:px-24">
				<h1 className="text-md md:text-3xl font-bold text-center">Our Partners</h1>
				<div className="py-6 flex justify-center">
					<Image
						src="/Partners.png"
						width={900}
						height={400}
						className="object-contain w-full md:w-8/12 "
					/>
				</div>
			</div>

			{/* Footer */}

			<div className="w-full bg-[#063720] flex flex-row justify-between px-10 lg:px-24">
				<div className="py-10 flex flex-col gap-4 text-white">
					<Image
						width={100}
						height={100}
						src="/Gritford.png"
						className="object-contain"
					/>
					<h2 className="font-bold text-md md:text-lg ">Contact Us</h2>
					<div className="font-extralight">
						<p className="flex gap-2 items-center">
							<MdLocalPhone />
							<a href="tel:+2342013306058" className="underline">
								020 1330 6058
							</a>
						</p>

						<p className="flex gap-2 items-center">
							<CiGlobe />
							<a href="https://www.dstep@skilltube.net" className="underline">
								dstep@skilltube.net
							</a>
						</p>
					</div>
				</div>
				<div className="p-10 flex flex-col gap-4 text-white">
					<Image
						width={50}
						height={50}
						src="/home_pin.png"
						className="object-contain"
					/>
					<h2 className="font-bold text-md md:text-lg ">Office Address</h2>
					<div className="font-extralight">
						<p>
							Gritford Center, (Old Camaria)
						</p>
						<p>
							Adjacent Aare Arisekola House,
						</p>
						<p>
							Bye Ikolaba, Oluwo-Nla, Ibadan
						</p>
					</div>
				</div>
      </div>
      
      {/* Copyright */}
   
      <div className="bg-[#063720] border-t text-slate-200 font-extralight px-10 lg:px-24 py-4 text-sm">
        <div className="flex justify-between">
          <p>	&copy;2024. All Rights Reserved by Gritford Center</p>
          <div className="flex gap-4">
            <p>Terms Of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
		</section>
	)
}

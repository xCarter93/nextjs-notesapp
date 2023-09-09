import Image from "next/image";
import Link from "next/link";

export default async function Navbar() {
	return (
		<div className="max-w-[98%] flex mx-auto py-2">
			<div className="navbar bg-primary text-primary-content rounded-full">
				<div className="flex-1">
					<Link
						href="/"
						className="btn btn-ghost normal-case text-xl rounded-full"
					>
						Cool Notes App
					</Link>
				</div>
				<div className="flex-none">
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className="rounded-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="inline-block h-5 w-5 stroke-current"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
									/>
								</svg>
							</div>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<a className="justify-between">
									Profile
									<span className="badge">New</span>
								</a>
							</li>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<a>Logout</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

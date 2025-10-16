function Footer() {
    return (
        <footer className="bg-base-300 text-base-content p-6 md:p-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* services */}
                <div>
                    <h6 className="font-semibold mb-2">Services</h6>
                    <ul className="space-y-1">
                        <li className="link link-hover">Branding</li>
                        <li className="link link-hover">Design</li>
                        <li className="link link-hover">Marketing</li>
                        <li className="link link-hover">Advertisement</li>
                    </ul>
                </div>

                {/* company */}
                <div>
                    <h6 className="font-semibold mb-2">Company</h6>
                    <ul className="space-y-1">
                        <li className="link link-hover">About us</li>
                        <li className="link link-hover">Contact</li>
                        <li className="link link-hover">Jobs</li>
                        <li className="link link-hover">Press kit</li>
                    </ul>
                </div>

                {/* legal */}
                <div>
                    <h6 className="font-semibold mb-2">Legal</h6>
                    <ul className="space-y-1">
                        <li className="link link-hover">Terms of use</li>
                        <li className="link link-hover">Privacy policy</li>
                        <li className="link link-hover">Cookie policy</li>
                    </ul>
                </div>

                {/* newsletter */}
                <div>
                    <h6 className="font-semibold mb-2">Newsletter</h6>
                    <form>
                        <label className="block mb-2 text-sm">Enter your email</label>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="username@site.com"
                                className="input input-bordered flex-1 rounded-r-none"
                            />
                            <button className="btn btn-primary rounded-l-none ml-1">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* footer bottom */}
            <div className="mt-6 text-center text-sm text-gray-600">
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;

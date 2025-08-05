const Footer = () => {

    return (
        <>
            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 px-6">
                <div className="grid md:grid-cols-4 gap-6">
                    <div>
                        <h4 className="font-bold mb-2">Merry Berry</h4>
                        <p>Delightful Ice Cream & Crispy Chicken Fries</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Quick Links</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">Menu</a></li>
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Contact</h4>
                        <p>📞 +91 98765 43210</p>
                        <p>✉️ hello@merryberry.com</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#">🌐</a>
                            <a href="#">📸</a>
                            <a href="#">📘</a>
                        </div>
                    </div>
                </div>
                <p className="text-center text-sm mt-6">© 2025 Merry Berry. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Footer;
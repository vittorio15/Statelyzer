import '@styles/globals.css';

export const metadata = {
    title: "Statelyzer",
    description: "this is the description"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body className="bg-background">
            <div>

            </div>

            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout
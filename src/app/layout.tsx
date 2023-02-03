import Chakrawrapper from "@/component/chakrawrapper"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <head />
      <body>
        <Chakrawrapper>{children}</Chakrawrapper></body>
    </html>
  )
}

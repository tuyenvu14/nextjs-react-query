export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello, Dashboard SLUG Page! {params.slug}</h1>
    </main>
  )
}

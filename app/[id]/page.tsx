import BaseLayout from '@/app/_common/_components/BaseLayout'
import ClientProfile from '@/app/_common/_components/ClientProfile'
import RecordCardList from '@/app/_common/_components/Record/RecordCardList'
import CustomerListBody from '@/app/_components/CustomerListBody'

export default function ClientProfilePage({
  params,
}: {
  params: { id: string }
}) {
  const body = <CustomerListBody />
  return (
    <main className="bg-cyan1 h-screen">
      <BaseLayout
        recordCardList={<RecordCardList body={body} />}
        clientProfile={<ClientProfile id={params.id} />}
      />
    </main>
  )
}

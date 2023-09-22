import BaseLayout from '@/app/_common/_components/BaseLayout'
import CustomerInformation from '@/app/_common/_components/CustomerInformation'
import RecordCardList from '@/app/_common/_components/Record/RecordCardList'
import CustomerListBody from '@/app/_components/CustomerListBody'

export default function CustomerInformationRootPage({
  params,
}: {
  params: { id: string }
}) {
  const body = <CustomerListBody />
  return (
    <main className="bg-cyan1 h-screen">
      <BaseLayout
        recordCardList={<RecordCardList body={body} />}
        customerInformation={<CustomerInformation id={params.id} />}
      />
    </main>
  )
}

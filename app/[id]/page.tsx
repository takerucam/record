import BaseLayout from '@/app/_components/BaseLayout'
import CustomerListBody from '@/app/_components/Customer/CustomerListBody'
import CustomerInformation from '@/app/_components/CustomerInformation'
import RecordCardList from '@/app/_components/Record/RecordCardList'

export default function CustomerInformationPage({
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

import BaseLayout from '@/app/_components/common/BaseLayout'
import CustomerInformation from '@/app/_components/Customer/CustomerInformation'
import CustomerListBody from '@/app/_components/Customer/CustomerListBody'
import RecordCardList from '@/app/_components/Record/RecordCardList'

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

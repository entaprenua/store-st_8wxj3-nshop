import { Show } from 'solid-js'
import { Button } from '~/components/ui/button'

export default function HomePage() {
  return (
    <div class="min-h-screen">
      <div>
        <h1 class="text-4xl font-bold mb-4">Welcome to My Store</h1>
        <p class="text-lg text-gray-600 mb-8">Shop the best products online</p>
        <Button variant="primary">Shop Now</Button>
      </div>
    </div>
  )
}

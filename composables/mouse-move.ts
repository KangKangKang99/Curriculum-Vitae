import {ref, onMounted, onUnmounted} from 'vue'

export function useMousePosition() {
    const x = ref<number>(0)
    const y = ref<number>(0)
    const el = ref<EventTarget | null>(null)

    function update(event: MouseEvent) {
        x.value = event.clientX
        y.value = event.clientY
        el.value = event.target
    }

    onMounted(() => window.addEventListener('mousemove', update))
    onUnmounted(() => window.removeEventListener('mousemove', update))
    return {x, y, el}
}

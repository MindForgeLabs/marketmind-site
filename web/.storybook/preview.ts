// D:\marketmind\web\.storybook\preview.ts
import '../src/styles/globals.css'

export default {
    parameters: {
        layout: 'centered',
        controls: { expanded: true },
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#0f172a' },
                { name: 'slate', value: '#0b1220' },
            ],
        },
    },
}

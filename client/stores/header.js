export const useHeaderStore = defineStore('header', () => {
    const isMobileMenuOpen = useState('isMobileMenuOpen', () => false)

    const setMobileMenu = () => {
        isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    return {
        isMobileMenuOpen,
        setMobileMenu
    }
}) 
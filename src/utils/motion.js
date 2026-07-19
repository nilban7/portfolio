export const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export const slideIn = (direction = 'left') => ({
    hidden: {
        opacity: 0,
        x: direction === 'left' ? -50 : 50
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
});

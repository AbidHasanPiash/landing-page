const FadeInFromLeft = {
    initial: {
        opacity: 0,
        x: -50,
    },
    animate: (custom) => ({
        opacity: 1,
        x: 0,
        transition: {
            type: 'easeIn',
            duration: 0.5,
            delay: custom?.delay || 0,
        },
    }),
};

const FadeInFromRight = {
    initial: {
        opacity: 0,
        x: 50,
    },
    animate: (custom) => ({
        opacity: 1,
        x: 0,
        transition: {
            type: 'easeIn',
            duration: 0.5,
            delay: custom?.delay || 0,
        },
    }),
};

const FadeInFromTop = {
    initial: {
        opacity: 0,
        y: -50,
    },
    animate: (custom) => ({
        opacity: 1,
        y: 0,
        transition: {
            type: 'easeIn',
            duration: 0.5,
            delay: custom?.delay || 0,
        },
    }),
};

const FadeInFromBottom = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: (custom) => ({
        opacity: 1,
        y: 0,
        transition: {
            type: 'easeIn',
            duration: 0.5,
            delay: custom?.delay || 0,
        },
    }),
};

const ScaleIn = {
    initial: {
        opacity: 0,
        scale: 0.8,
    },
    animate: (custom) => ({
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.5,
            delay: custom?.delay || 0,
        },
    }),
};

const RotateIn = {
    initial: {
        opacity: 0,
        rotate: -90,
    },
    animate: (custom) => ({
        opacity: 1,
        rotate: 0,
        transition: {
            type: 'easeInOut',
            duration: 0.5,
            delay: custom?.delay || 0,
        },
    }),
};

const ZoomIn = {
    initial: {
        opacity: 0,
        scale: 1.5,
    },
    animate: (custom) => ({
        opacity: 1,
        scale: 1,
        transition: {
            type: 'easeOut',
            duration: 0.5,
            delay: custom?.delay || 0,
        },
    }),
};

const ZoomOut = {
    initial: {
        opacity: 0,
        scale: 0.5,
    },
    animate: (custom) => ({
        opacity: 1,
        scale: 1,
        transition: {
            type: 'easeOut',
            duration: 0.5,
            delay: custom?.delay || 0,
        },
    }),
};

const BounceIn = {
    initial: {
        opacity: 0,
        y: -100,
    },
    animate: (custom) => ({
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
            duration: 0.6,
            delay: custom?.delay || 0,
        },
    }),
};

const StaggerContainer = {
    animate: (custom) => ({
        transition: {
            staggerChildren: custom?.stagger || 0.3,
        },
    }),
};

const SlideOutLeft = {
    initial: {
        opacity: 1,
        x: 0,
    },
    animate: (custom) => ({
        opacity: 0,
        x: -50,
        transition: {
            type: 'easeIn',
            duration: 0.5,
            delay: custom?.delay || 0,
        },
    }),
};

const FlipIn = {
    initial: {
        opacity: 0,
        rotateY: -90,
    },
    animate: (custom) => ({
        opacity: 1,
        rotateY: 0,
        transition: {
            type: 'easeOut',
            duration: 0.5,
            delay: custom?.delay || 0,
        },
    }),
};

const FadeIn = {
    initial: {
        opacity: 0,
    },
    animate: (custom) => ({
        opacity: 1,
        transition: {
            type: 'easeIn',
            duration: 1.5,
            delay: custom?.delay || 0,
        },
    }),
};

const FadeOut = {
    initial: {
        opacity: 1,
    },
    animate: (custom) => ({
        opacity: 0,
        transition: {
            type: 'easeIn',
            duration: 1.5,
            delay: custom?.delay || 0,
        },
    }),
};

const FadeInWithBlur = {
    initial: {
        opacity: 0,
        filter: 'blur(4px)',
    },
    animate: (custom) => ({
        opacity: 1,
        filter: 'blur(0)',
        transition: {
            type: 'easeIn',
            duration: 1,
            delay: custom?.delay || 0,
        },
    }),
};

const FadeOutWithBlur = {
    initial: {
        opacity: 1,
        filter: 'blur(0)',
    },
    animate: (custom) => ({
        opacity: 0,
        filter: 'blur(4px)',
        transition: {
            type: 'easeIn',
            duration: 1,
            delay: custom?.delay || 0,
        },
    }),
};

const transitions = {
    FadeInFromLeft,
    FadeInFromRight,
    FadeInFromTop,
    FadeInFromBottom,
    ScaleIn,
    RotateIn,
    ZoomIn,
    ZoomOut,
    BounceIn,
    StaggerContainer,
    SlideOutLeft,
    FlipIn,
    FadeIn,
    FadeOut,
    FadeInWithBlur,
    FadeOutWithBlur,
}

export default transitions
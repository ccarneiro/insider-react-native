const conditions = {
    storm: {
        name: 'rainy-outline',
        color: '#1ec9ff',
    },
    'clear_day': {
        name: 'partly-sunny-outline',
        color: '#FFB300',
    },
    rain: {
        name: 'rainy-outline',
        color: '#1ec9ff',
    },
    default: {
        name: 'cloud-outline',
        color: '#1ec9ff',
    },
}

export function condition(condition) {
    return conditions[condition] || conditions.default;
}

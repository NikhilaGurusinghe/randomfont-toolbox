export function getQueryParamString(name: string): string | null {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

export function getQueryParamNumber(name: string): number | null {
    const raw: string | null = getQueryParamString(name);
    if (raw === null) return null;
    const n: number = Number(raw);
    return Number.isFinite(n) ? n : null;
}


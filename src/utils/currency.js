export function formatPrice(usdPriceString) {
    if (!usdPriceString || typeof usdPriceString !== 'string') return usdPriceString;
    
    // Check if Sinhala mode
    const isSinhala = document.cookie.includes('googtrans=/si/si') || document.cookie.includes('googtrans=/en/si');
    
    if (isSinhala && usdPriceString.includes('$')) {
        // Extract number from string like "$980.00"
        const amountStr = usdPriceString.replace(/[^0-9.]/g, '');
        if (amountStr) {
            const amount = parseFloat(amountStr);
            if (!isNaN(amount)) {
                // Approximate conversion rate: 1 USD = 300 LKR
                const lkrAmount = amount * 300;
                // Add commas
                const formatted = lkrAmount.toLocaleString('en-LK');
                // Replace the '$...' part with 'රු. ...'
                return usdPriceString.replace(/\$[0-9,.]+/, `රු. ${formatted}.00`);
            }
        }
    }
    
    return usdPriceString;
}

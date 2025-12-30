import CommonUtils from './CommonUtils';

describe('CommonUtils', () => {
    describe('formatter', () => {
        test('should format currency correctly for VND', () => {
            const value = 100000;
            const formatted = CommonUtils.formatter.format(value);
            // The exact output depends on the locale 'en-VN' and environment, 
            // but typically it should contain "VND" and the number.
            // We use a flexible regex or check for parts.
            expect(formatted).toContain('VND');
            expect(formatted).toContain('100,000');
        });

        test('should format 0 correctly', () => {
            const value = 0;
            const formatted = CommonUtils.formatter.format(value);
            expect(formatted).toContain('0');
        });
    });
});

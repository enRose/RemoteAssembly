using System;
using System.Linq;

namespace Barin.RomoteAssembly.Utils
{
    public class StrUtil
    {
        public static bool AnyNull(params string[] values) =>
            values.Any(v => string.IsNullOrWhiteSpace(v));
    }
}

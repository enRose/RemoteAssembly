using System;
using System.Linq;

namespace CoreBot.Utils
{
    public class StrUtil
    {
        public static bool AnyNull(params string[] values) =>
            values.Any(v => string.IsNullOrWhiteSpace(v));
    }
}

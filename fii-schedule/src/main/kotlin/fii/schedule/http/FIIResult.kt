package fii.schedule.http

import java.math.BigDecimal

data class FIIResult(
        val dividendYeld: BigDecimal,
        val lastDividend : BigDecimal,
        val value : BigDecimal,
        val fiiType : String,
        val sumary : Summary
)

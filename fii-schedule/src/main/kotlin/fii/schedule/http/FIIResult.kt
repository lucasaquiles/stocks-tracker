package fii.schedule.http

import io.micronaut.core.annotation.Introspected
import java.math.BigDecimal

@Introspected
data class FIIResult(
        val dividendYeld: BigDecimal,
        val lastDividend : BigDecimal,
        val value : BigDecimal,
        val fiiType : String,
        val sumary : Summary
)

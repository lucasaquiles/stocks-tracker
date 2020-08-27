package fii.schedule.http

import io.micronaut.core.annotation.Introspected
import java.math.BigDecimal

@Introspected
data class Summary(
        val median : BigDecimal
)

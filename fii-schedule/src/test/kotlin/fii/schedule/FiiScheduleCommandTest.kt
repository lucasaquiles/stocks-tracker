package fii.schedule

import io.micronaut.configuration.picocli.PicocliRunner
import io.micronaut.context.ApplicationContext
import io.micronaut.context.env.Environment
import java.io.ByteArrayOutputStream
import java.io.PrintStream
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.Assertions

class FiiScheduleCommandTest {

    @Test
    fun testWithSearchCommandOption() {
        val ctx = ApplicationContext.run(Environment.CLI, Environment.TEST)
        val baos = ByteArrayOutputStream()
        var out = System.out
        System.setOut(PrintStream(baos))

        val args = arrayOf("search", "-q", "sdil11" , "--verbose")
        PicocliRunner.run(FiiScheduleCommand::class.java, ctx, *args)
        out.println(baos.toString())

        Assertions.assertTrue(baos.toString().contains("FIIResult(dividendYeld=0.49, lastDividend=0.5, value=101.2, fiiType=Tijolo: Galpões, sumary=Summary(median=0.52))\n"))

        ctx.close()
    }
}

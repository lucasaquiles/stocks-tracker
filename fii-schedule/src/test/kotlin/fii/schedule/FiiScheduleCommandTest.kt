package fii.schedule

import io.micronaut.configuration.picocli.PicocliRunner
import io.micronaut.context.ApplicationContext
import io.micronaut.context.env.Environment
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import java.io.ByteArrayOutputStream
import java.io.PrintStream

class FiiScheduleCommandTest {

    @Test
    fun testWithSearchCommandOption() {
        val ctx = ApplicationContext.run(Environment.CLI, Environment.TEST)
        val baos = ByteArrayOutputStream()
        var out = System.out
        System.setOut(PrintStream(baos))

        val args = arrayOf("search", "-q", "sdil11")
        PicocliRunner.run(FiiScheduleCommand::class.java, ctx, *args)
        out.println(baos.toString())

        val expected = "Current Value: R\$101.2\n" +
                "Dividend Yeld: R\$0.49\n" +
                "Last dividend Yeld: R\$0.5"

        print(baos.toString())
        Assertions.assertTrue(baos.toString().contains(expected))

        ctx.close()
    }
}
